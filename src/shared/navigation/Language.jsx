import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import styles from "./Language.module.css";
import En from "../../assets/eng.svg";
import De from "../../assets/ger.svg";

function Language() {
  const [showDropdown, setShowdropdown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("lan");
  const language = {
    code: params === "en" ? En : De,
  };

  const setEnglish = () => {
    setSearchParams((prev) => {
      prev.set("lan", "en");
      return prev;
    });
    setShowdropdown(false);
  };

  const setDeutsch = () => {
    setSearchParams((prev) => {
      prev.set("lan", "de");
      return prev;
    });
    setShowdropdown(false);
  };
  return (
    <div className={styles.language}>
      <img src={language.code} alt="" />
      {!showDropdown && <FaAngleDown onClick={() => setShowdropdown(true)} />}
      {showDropdown && <FaAngleUp onClick={() => setShowdropdown(false)} />}
      {showDropdown && (
        <div className={styles.dropdown}>
          <div onClick={setEnglish}>
            <img src={En} alt="" />
          </div>
          <div onClick={setDeutsch}>
            <img src={De} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Language;
