package Chainin;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;

import com.github.javafaker.Faker;
import org.testng.ITestContext;

public class Getuser 
{
  
	
    String tocken="b60f748056a4527a35be67f86ce10f02b4929ac9122ef418434eae410a020023" ;
    String BaseURL="https://gorest.co.in/public/v2/users";
    
    
	@Test
	(priority=2)
	void getuser(ITestContext context)
	
	{
		given()
		.headers("Authorization","Bearer " +tocken)
	    .pathParam("userid",(Integer)context.getAttribute("userid") )
		.when()
           .get(BaseURL+"/{userid}")
		.then()
		.statusCode(200)
		.log().body();
	}
}
