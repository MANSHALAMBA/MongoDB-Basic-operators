db.moviesScratch.insertMany(
    [
        {
  	    "_id" : "tt0084726",
  	    "title" : "Star Trek II: The Wrath of Khan",
  	    "year" : 1982,
  	    "type" : "movie"
          },
          {
  	    "_id" : "tt0796366",
  	    "title" : "Star Trek",
  	    "year" : 2009,
  	    "type" : "movie"
          },
          {
  	    "_id" : "tt0084726",
  	    "title" : "Star Trek II: The Wrath of Khan",
  	    "year" : 1982,
  	    "type" : "movie"
          },
          {
  	    "_id" : "tt1408101",
  	    "title" : "Star Trek Into Darkness",
  	    "year" : 2013,
  	    "type" : "movie"
          },
          {
  	    "_id" : "tt0117731",
  	    "title" : "Star Trek: First Contact",
  	    "year" : 1996,
  	    "type" : "movie"
        }
    ]
);



db.teacherdata.insertMany(
    [
        {"uno":"1","department":"cse","Faculty_Name":"PRASHANT  NIGAM","Exact_Designation":"ASST PROFESSOR","Appointment_Type":"Regular","Dat_of_Joining":"27/01/2011","D.O.B":"1987-04-10T18:29:50.000Z","Email_ID":"pnigam90@yahoo.com","Contact_Number":9810693475},
            {"uno":"2","department":"cse","Faculty_Name":"SUNNY SAINI","Exact_Designation":"ASST PROFESSOR","Appointment_Type":"Regular","Date_of_Joining":"21/07/2011","D.O.B":"19/11/1984","Email_ID":"sunnysainigo@gmail.com","Contact_Number":9818922625},
            {"uno":"3","department":"cse","Faculty_Name":"CHANDRA JEET SINGH","Exact_Designation":"ASST PROFESSOR","Appointment_Type":"Regular","Date_of_Joining":"17/01/2011","D.O.B":"1978-10-08T18:29:50.000Z","Email_ID":"cjsingh22@gmail.com","Contact_Number":9711043201},
            {"uno":"4","department":"cse","Faculty_Name":"VIVEK KUMAR","Exact_Designation":"ASST PROFESSOR","Appointment_Type":"Adhoc/Contract","Date_of_Joining":"19/10/2011","D.O.B":"13/11/1984","Email_ID":"vivekgupta477@gmail.com","Contact_Number":9899616031},
            {"uno":"5","department":"cse","Faculty_Name":"HEMA SHARMA","Exact_Designation":"ASST PROFESSOR","Appointment_Type":"Adhoc","Date_of_Joining":"2012-11-30T18:29:50.000Z","D.O.B":"1985-04-06T18:29:50.000Z","Email_ID":"hemasharma776@gmail.com","Contact_Number":9911106168},
            {"uno":"6","department":"cse","Faculty_Name":"NITIN  KUMAR  GUPTA","Exact_Designation":"ASST PROFESSOR","Appointment_Type":"Regular","Date_of_Joining":"2006-07-07T18:29:50.000Z","D.O.B":"15/07/1985","Email_ID":"nitin24nov84@indiatimes.com"},
            {"uno":"7","department":"cse","Faculty_Name":"VIKASH MALIK","Exact_Designation":"ASST PROFESSOR","Appointment_Type":"Regular","Date_of_Joining":"16/7/2012","D.O.B":"1984-02-02T18:29:50.000Z","Email_ID":"malikvikash4@gmail.com","Contact_Number":9896756888,},
            {"uno":"8","department":"cse","Faculty_Name":"RITU KANDARI","Exact_Designation":"ASST PROFESSOR","Appointment_Type":"Contract","Date_of_Joining":"2012-06-07T18:29:50.000Z","Email_ID":"ritukandari_aries@yahoo.com","Contact_Number":9013391005,}
            
    ]  
);


db.subjectdata.insertMany(
    [
		{
			"class":"cse1a",
			"group":"1" ,
			  "Applied_Mathematics" : "1",
			"Physics" : "2",
			"Engineering_Chemistry" : "3",
			"Electronic_Devices&Circuits" : "4",
			"HVPE" : "5",
			"FOC" : "6",
			"Physics_lab" : "7",
			"Engineering_Chemistry_lab" : "8",
			"Electronic_Devices&Circuits_lab" : "1",
			"FOC_lab" : "2"

			
			
			 },

			 {
			   "class":"cse1a",
			   "group":"2" ,
				 "Applied_Mathematics" : "1",
			   "Physics" : "2",
			   "Engineering_Chemistry" : "3",
			   "Electronic_Devices&Circuits" : "4",
			   "HVPE" : "5",
			   "FOC" : "6",
			   "Physics_lab" : "3",
			"Engineering_Chemistry_lab" : "8",
			"Electronic_Devices&Circuits_lab" : "1",
			"FOC_lab" : "2"
			   
				},
			
			 {
			  "class":"cse3b",
				"STLD" : "7",
			"Theory_Of_Computation(TOC)" : "8",
			"CGMMT" : "1",
			"Discrete_Mathematics" : "2",
			"Applied_Mathematics" : "3",
			"Data_Structures" : "4"
			 },
			 {
			 "class":"cse5c",
			   "ADA" : "5",
			"Software_Engineering" : "6",
			"Java" : "7",
			"Digital_Communication" : "8",
			"C.S.P" : "1",
			"Industrial_Management" : "2"
			 },
			 {
			"class":"cse1b",
			  "Applied_Mathematics" : "1",
			"Physics" : "4",
			"Engineering_Chemistry" : "5",
			"Electronic_Devices&Circuits" : "6",
			"HVPE" : "7",
			"FOC" : "8"
		   }
    ]
);




