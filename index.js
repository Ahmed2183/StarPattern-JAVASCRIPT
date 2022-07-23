//STAR PATTERNS EXAMPLES


/*

*****
*****
*****
*****
*****

*/

var i,j;

for(i=1; i<=5; i++) //rows =5
{
    for(j=1; j<=5; j++) //columns =5
    {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

/*

*
**
***
****
*****

*/


for(i=1; i<=5; i++) //i=rows
{
    for(j=1; j<=5; j++) //j=columns
    {
        if(j<=i)
        {
            document.write("*");
        } 
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

/*

*****
****
***
**
*

*/

for(i=1; i<=5; i++)
{
    for(j=1; j<=5; j++)
    {
        if(j<=6-i)
        {
            document.write("*");
        } 
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

/*

    *
   **
  ***
 ****
*****

*/

for(i=1; i<=5; i++)
{
    for(j=1; j<=5; j++)
    {
        if(j>=6-i)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}


document.write("<br>");
document.write("<br>");

/*

*****
 ****
  ***
   **
    *    

   */

for(i=1; i<=5; i++)
{
    for(j=1; j<=5; j++)
    {
        if(j>=i)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

/*

    *    
   ***   
  *****  
 ******* 
*********

*/

for(i=1; i<=5; i++)
{
    for(j=1; j<=9; j++)
    {
        if(j>=6-i && j<=4+i)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}


document.write("<br>");
document.write("<br>");

/*

*********
 *******
  *****
   ***
    *

   */

for(i=1; i<=5; i++)
{
    for(j=1; j<=9; j++)
    {
        if(j>=i && j<=10-i)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

/*

    *    
   * *   
  *   *  
 *     * 
*       *

*/

for(i=1; i<=5; i++)
{
    for(j=1; j<=9; j++)
    {
        if(j===6-i || j===4+i)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

/*

*       *
 *     * 
  *   *  
   * *   
    *        

*/

for(i=1; i<=5; i++)
{
    for(j=1; j<=9; j++)
    {
        if(j===i || j===10-i)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

/*

*****
*   *
*   *
*   *
*****

*/

for(i=1; i<=5; i++)
{
    for(j=1; j<=5; j++)
    {
        if(i===1 || i===5 || j===1 || j===5)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}


document.write("<br>");
document.write("<br>");


/*

*    
**   
* *  
*  * 
*****

*/

for(i=1; i<=5; i++)
{
    for(j=1; j<=5; j++)
    {
        if(j===1 || i===5 || j===i)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");


/*

    *    
   * *   
  *   *  
 *     * 
*********

*/

for(i=1; i<=5; i++)
{
    for(j=1; j<=9; j++)
    {
        if(j===6-i || j===4+i || i===5)
        {
            document.write("*");
        } 
        else
        {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}