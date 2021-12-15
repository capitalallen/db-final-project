**REST API**
----
  written in nodejs 

**URL**

  /api/get_insurance_plan

* **Method:**
  

  `GET` 


* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ id : 12,plan_name:abc,desc:abc,ins_cost:20 }`
 
* **Error Response:**


  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`


  * **Code:** 400 Error <br />
    **Content:** `{ error : "unsuccessful" }`

**URL**

  /api/update_insurance_plan

* **Method:**
  

  `POST` 


* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ res: success}`
 
* **Error Response:**


  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`


  * **Code:** 400 Error <br />
    **Content:** `{ error : "unsuccessful" }`

  * **Data Params**

    `
    id,plan_name,desc,ins_cost
    `

**URL**

  /api/get_airplan_models

* **Method:**
  

  `GET` 


* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ id : 12,pl_name:abc,manufc:abc,eng_cnt:20,fleet_cnt:20 }`
 
* **Error Response:**


  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`


  * **Code:** 400 Error <br />
    **Content:** `{ error : "unsuccessful" }`

**URL**

  /api/add_airplan_models

* **Method:**
  

  `POST` 


* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ res: success}`
 
* **Error Response:**


  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`


  * **Code:** 400 Error <br />
    **Content:** `{ error : "unsuccessful" }`

  * **Data Params**

    `{ id : 12,pl_name:abc,manufc:abc,eng_cnt:20,fleet_cnt:20 }`

**URL**

  /api/get_cab_cls

* **Method:**
  

  `GET` 


* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ id : 12,cab_name:abc,desc:abc}`
 
* **Error Response:**

  * **Code:** 400 Error <br />
    **Content:** `{ error : "unsuccessful" }`

**URL**

  /api/add_cab_cls

* **Method:**
  

  `POST` 


* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ res: success}`
 
* **Error Response:**

  * **Code:** 400 Error <br />
    **Content:** `{ error : "unsuccessful" }`

  * **Data Params**

    `
    { id : 12,cab_name:abc,desc:abc}
    `



* **URL**

  <_The URL Structure (path only, no root url)_>

* **Method:**
  
  <_The request type_>

  `GET` | `POST` | `DELETE` | `PUT`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`

   **Optional:**
 
   `photo_id=[alphanumeric]`

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 