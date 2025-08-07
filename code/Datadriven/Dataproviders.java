package Datatest;

import java.io.IOException;

import org.testng.annotations.DataProvider;

public class Dataproviders

{
	 
    @DataProvider
    
   public Object[][] datawithexcel() throws IOException
    
    {
    	String Path=".\\src\\test\\java\\Datatest\\Sample data.xlsx";
    	String sheet="Sheet1";
    	
    	int row=Utility.getRowCount(Path, sheet);
    	
    	System.out.println(" Number of rows are "+ row); // 2
    	
    	int cellcount=Utility.getCellCount(Path, sheet, row);
    	
    	System.out.println(" Number of column  are "+ cellcount); // 4
    	
    	Object data[][]=new Object [row][cellcount];
   
    	
    	for(int i=1;i<=row;i++)
    	{
    		
    		for(int j=0;j<cellcount;j++)
    		{
    			data[i-1][j]=Utility.getCellData(Path, sheet, i, j);
    		//	System.out.println(Utility.getCellData(Path, sheet, i, j));
    		//{{"","","",""},{"","","",""}}
    		}
    		
    		System.out.println(data);
    	}
    	
    	
    	return data; 
    	
    }
    
}
