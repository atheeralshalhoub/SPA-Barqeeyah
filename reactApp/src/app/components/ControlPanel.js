import React from "react" ;

export const ControlPanel= (props) => {

    return(
        <form action = "controlPanel.php" method="POST">
        
		
	<center><table>
	<tr>
	<td>
<h5 class="phone"> أضِف أرقامك أو قم بتعديل الأرقام المسجلة</h5>
</td>
	</tr>

	<tr>
	    <th> </th><th>رقم واتساب مسجل</th>
	</tr>
    
	<tr>
	    <th> 
	        
	    </th>
        <th>رقم تيليقرام مسجل</th>
	</tr>
	<tr>
	    <th>
	       
	        
	    </th><th>مسجل SMS رقم</th>
	</tr>
		
	<tr>
	<td>
	<select><option>966</option></select>
	<input type="tel" name="whatsapp" class="field"/> 
	</td>
	<th>إضافة/تغيير واتساب</th>
	</tr>
	
	
	<tr>
	<td>
	<select><option>966</option></select>
	<input type="tel" name="telegram" class="field"/>
	</td>
	<th>إضافة/تغيير تيليقرام</th>
	</tr>
	
	<tr>
	<td>
	<select><option>966</option></select>
	<input type="tel" name="sms" class="field"/>
	</td>
	<th>SMS إضافة/تغيير </th>
	</tr>
	
	</table> </center> 

	<input class="save"
	type="submit"
	value="حفظ" name="submit"/>
</form>
    );

}