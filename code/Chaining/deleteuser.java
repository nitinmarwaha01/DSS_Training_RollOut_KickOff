package Chainin;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;
import org.testng.ITestContext;

public class deleteuser 

{
	  String tocken="b60f748056a4527a35be67f86ce10f02b4929ac9122ef418434eae410a020023" ;
	    String BaseURL="https://gorest.co.in/public/v2/users";
	    int userid;
	@Test
	
	void deleteuser(ITestContext context)
	
	{
		given()
			.headers("Authorization","Bearer " +tocken)
			.pathParam("userid",(Integer)context.getAttribute("userid") )
		.when()
	           .delete(BaseURL+"/{userid}")	
	    .then()
	    	.statusCode(204);
	           
	}
}
