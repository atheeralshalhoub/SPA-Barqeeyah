import React from "react" ;

export const SignIn = (props) => {

    return(
        <div id="wrapper">


                            <form  method="post" action="signin2.php"> 
                                <h1>!مرحبا بعودتك</h1> 
                                <p> 
                                    <label for="email" > البريد الإلكتروني </label>
                                    <input id="email" name="email" required="required" type="email" placeholder="myemail@mail.com" class="center4"/>
                                </p>
                                <p> 
                                    <label for="password" > كلمة المرور </label>
                                    <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" class="center4" /> 
                                </p>

						<input class="button" type="submit" name="submit" value="تسجيل الدخول" /><br/>

                             <p class="center5"> لست عضو معنا بعد؟	<a href="register.php" class="under">بادر بالتسجيل الآن</a> </p>
								
                            </form>
  
                        </div>	



    );

}