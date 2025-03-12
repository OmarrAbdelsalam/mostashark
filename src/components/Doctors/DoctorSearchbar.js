"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button, TextField, InputAdornment } from "@mui/material";
import api from "@/src/utils/api";
import { useTranslations } from "next-intl"; 

const SearchDoctorBar = ({ onSearch, category, searchTerm, onCategoryChange, onSearchTermChange }) => {
  const t = useTranslations('SearchDoctorBar'); 
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category || t("allSpecialties"));
  const [currentSearchTerm, setCurrentSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/Doctor/GetDoctors');
        const uniqueCategories = [...new Set(
          response.data.items
            .filter(doctor => doctor.isAvailable)
            .map(doctor => doctor.category)
            .filter(category => category.trim() !== "")
        )];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    const newCategory = category === t("allSpecialties") ? "" : category;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory); // Pass the updated category to the parent component
  };

  const handleSearchTermChange = (e) => {
    const newSearchTerm = e.target.value;
    setCurrentSearchTerm(newSearchTerm);
    onSearchTermChange(newSearchTerm); // Pass the updated search term to the parent component
  };

  const handleSearchClick = () => {
    console.log("Button Clicked: Triggering search"); // Debugging: Ensure this function is called
    onSearch();
  };

  return (
    <div dir="rtl" className="mb-5 items-center flex flex-col gap-2 -mt-10 sm:mt-0 md:mt-10">
      <h2 className="tajawal-extrabold mb-2 text-center md:text-5xl tracking-wide text-4xl">
        {t("searchFavoriteDoctor")} <span className="text-primary"> {t("yourDoctor")} </span>
      </h2>
      <p className="text-gray-500 text-lg text-center mb-3">
        {t("doctorDescription")}
      </p>
     
    </div>
  );
};

export default SearchDoctorBar;
