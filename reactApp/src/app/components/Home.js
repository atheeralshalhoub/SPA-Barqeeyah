import React from "react" ;

export const Home= (props) => {

    return(
        <div> 
                        
         <h1  class="center">
br>
              مرحبا بك في خدمة برقية <br/> 
                اشترك في القائمة البريدية ليتم إعلامك عند إنطلاقها</h1>

<form method="post" action="index.php">  
<input type="text" name="email" class="corner" data-validation-required-message="فضلًا أدخل بريدًا صحيحا" /> <br/>
                    
<input class="button" style="width:20%;" type="submit" name="submit1" value="اشترك الآن"/><br/>
 <input class="button" style="width:20%;" type="submit" name="submit2" value="إلغاء الإشتراك " /><br/>
                   
                </form>
 </div>

    );

}