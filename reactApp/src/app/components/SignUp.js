import React from "react" ;

export const SignUp = (props) => {

    return(
        <div class="content">
        <div class="content-inside">
        <div id="wrapper2">
						
                            <form  method="POST" action="register2.php"  autocomplete="on" > 
                               <h1>نسعد بانضمامك</h1> 
								
                                <p> 
                                    <label for="usernamesignup">*اسم المستخدم</label>
                                    <input class="center5" id="usernamesignup" name="usernamesignup" required="required" type="text" />
                                </p>
                                <p> 
                                    <label for="lastnamesignup">* الإسم الأخير</label>
                                    <input class="center5" id="lastnamesignup" name="lastnamesignup" required="required" type="text" /> 
                                </p>
                                
                                <p> 
                                    <label for="email">* البريد الإلكتروني</label>
                                    <input class="center5" name="email" required="required" type="email" placeholder="someone@xxxx.com"/>
                                    </p>

                                <p> 
                                    <label for="passwordsignup">*كلمة المرور</label>
                                    <input class="center5" id="passwordsignup" name="passwordsignup" required="required" type="password"/>
                                </p>

                                <p> 
                                    <label for="passwordsignup_confirm">*تأكيد الرقم السري </label>
                                    <input class="center5" id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password"/>
                                </p>

								<input required="required" type="checkbox"/> <a href="privacyPolicy.php"> أوافق على سياسة الخصوصية </a><br/>
								
                            
								<input id="service" required="required" type="checkbox"/>  <a  for="service" href="termsOfService.php"> أوافق على بنود الخدمة 
								</a> 
								
             
									<input class="button" name='submit' type="submit" value="تسجيل"/>
								
                         
									<a href="signin1.php" class="under">  لديك حساب في الموقع؟ </a>
								
                            </form>
							
                    
		</div>		

        </div>
        </div>

    );

}