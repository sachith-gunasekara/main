/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./ContactInfo.module.css";

const ContactDetail = ({ label, children }) => (
  <>
    <h2 className={styles.contactLabel}>{label}</h2>
    <p className={styles.contactDetail}>{children}</p>
  </>
);

function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
      <div className={styles.contactDetail}> 
      <div className={styles.contactInfo}> 
      <ContactDetail label="Address :">
        123 Street name, <br />
        City, <br />
        Country
      </ContactDetail>
      
      
     
      <ContactDetail label="E-mail :">ncsgiuswgb@gmail.com</ContactDetail>
      <h2 className={styles.phoneLabel}>Tele Phone Num :</h2>
      <p>
        +1234567897 <br />
        +3242768893
      </p>
      </div></div>
    </section>
  );
}

export default ContactInfo;
