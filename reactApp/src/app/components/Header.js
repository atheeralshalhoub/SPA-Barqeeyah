import React from "react" ;

export const Header = (props) => {

        return (
            <header> 
      <a class="topright" href="index.php">
  <img src= "img/logo2.png" />
</a>

  <div class="navbar">
 
          <a href="signin1.php" class="thick">تسجيل الدخول</a>
        <a href="register.php" class="thick">التسجيل</a> 

    <a href="services.php" class="thick">خدماتنا</a>
        <a href="about.php" class="thick">ماهي برقية؟</a>
<a href="index.php" class="thick">الرئيسة</a> 

</div>
    </header>
        );

};