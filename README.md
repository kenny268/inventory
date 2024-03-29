# Inventory Cloud Project

Welcome to your Firebase Cloud project! This project is developed using JavaScript and Firebase Cloud Functions.

## Prerequisites
### Make sure you have the following installed:
#### Node.js: [Download and Install Node.js](https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz)
### Check if nodejs is ther
  ```bash
  node -v
  ```

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kenny268/inventory
   cd inventory
   ```
2. **Install Dependencies:**
   ```bash
   npm install
3. **Firebase Configuration:**
   ```bash
   1. Make sure you have a Firebase project set up: Firebase Console.
   2. Obtain your Firebase Admin SDK credentials by going to Project Settings > Service accounts > Generate new private key.
   3. Save the generated JSON key file securely.
   4. Rename the JSON key file to serviceAccountKey.json.
   5. Place the serviceAccountKey.json file in the root of your project.
 4. **Run Locally:**
    ```bash
    npm run serve
    ```

# ScreenShot of Postman
 ## Here is create inventory
 ### http://localhost:5000/verb-assesment/us-central1/createInventory
![image](https://github.com/kenny268/inventory/assets/57144468/95abb560-1073-49c2-9d68-4a40e829be59)

## Get in Invenory
### http://localhost:5000/verb-assesment/us-central1/getInventory
![image](https://github.com/kenny268/inventory/assets/57144468/af3a9e11-9d2e-4220-892b-3bdf64fdd1ab)

## Update inventory
### http://localhost:5000/verb-assesment/us-central1/updateInventory
![image](https://github.com/kenny268/inventory/assets/57144468/3c73ae7a-e92d-4756-a4da-39c3b0dace02)

## after updated
### http://localhost:5000/verb-assesment/us-central1/getInventory
![image](https://github.com/kenny268/inventory/assets/57144468/b8946c55-8142-44af-9a4b-91cb9d0a2fd4)

## Delete Inventory
### http://localhost:5000/verb-assesment/us-central1/deleteInventory
![image](https://github.com/kenny268/inventory/assets/57144468/2cc8e6ba-27bb-4d27-a520-0f112dde03f2)

## After deleted
### http://localhost:5000/verb-assesment/us-central1/getInventory
![image](https://github.com/kenny268/inventory/assets/57144468/8843282a-9f41-4999-af74-c8e0332507be)

## check id if it is there after deleted 
### http://localhost:5000/verb-assesment/us-central1/deleteInventory
![image](https://github.com/kenny268/inventory/assets/57144468/d62dcdab-ef95-4f60-b7cb-2ae988a4409c)






