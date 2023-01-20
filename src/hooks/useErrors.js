import { useState } from "react";

const useErrors = () => {
  const [errors, setErrors] = useState({
    firstName: {
      error: false,
      message: "First name is required",
    },
    lastName: {
      error: false,
      message: "Last name is required",
    },
    birthDate: {
      error: false,
      message: "Birth date is required",
    },
    startDate: {
      error: false,
      message: "Start date is required",
    },
    department: {
      error: false,
      message: "Department is required",
    },
    street: {
      error: false,
      message: "Street is required",
    },
    city: {
      error: false,
      message: "City is required",
    },
    selectState: {
      error: false,
      message: "State is required",
    },
    zipcode: {
      error: false,
      message: "Zipcode is required",
    },
  });

  const isFormValid = (userInfos) => {
    let newErrors = { ...errors };
    let formIsValid = true;

    if (!userInfos.firstName) {
      newErrors.firstName.error = true;
      formIsValid = false;
    } else {
      newErrors.firstName.error = false;
    }

    if (!userInfos.lastName) {
      newErrors.lastName.error = true;
      formIsValid = false;
    } else {
      newErrors.lastName.error = false;
    }

    if (!userInfos.birthDate || userInfos.birthDate === "undefined/undefined/") {
      newErrors.birthDate.error = true;
      formIsValid = false;
    } else {
      newErrors.birthDate.error = false;
    }

    if (!userInfos.startDate || userInfos.startDate === "undefined/undefined/") {
      newErrors.startDate.error = true;
      formIsValid = false;
    } else {
      newErrors.startDate.error = false;
    }

    if (!userInfos.department) {
      newErrors.department.error = true;
      formIsValid = false;
    } else {
      newErrors.department.error = false;
    }

    if (!userInfos.street) {
      newErrors.street.error = true;
      formIsValid = false;
    } else {
      newErrors.street.error = false;
    }

    if (!userInfos.city) {
      newErrors.city.error = true;
      formIsValid = false;
    } else {
      newErrors.city.error = false;
    }

    if (!userInfos.selectState) {
      newErrors.selectState.error = true;
      formIsValid = false;
    } else {
      newErrors.selectState.error = false;
    }

    if (!userInfos.zipcode) {
      newErrors.zipcode.error = true;
      formIsValid = false;
    } else {
      newErrors.zipcode.error = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  return { errors, isFormValid };
};

export default useErrors;
