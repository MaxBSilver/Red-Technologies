# Red-Technologies
![Screenshot 2023-03-16 at 3 23 12 PM](https://user-images.githubusercontent.com/43679682/225731166-10f08d7f-5bbc-4b95-b3a9-73adbf9ada9c.png)

# Run the FE container
- Make sure to add the .env file that was included with this project to the root directory
- Use the following command to run the container through docker: `npm run dev`

# Testing
- Use the following command to run the testing suite: `npm run test`

# Functionality
- Create orders through the create order modal which can be opened by clicking the `Create Order Button`
![Screenshot 2023-03-16 at 3 25 04 PM](https://user-images.githubusercontent.com/43679682/225731558-5574ce0a-9aba-454b-976a-6266fbab60c2.png)

- Orders can be saved as drafts. When the order is saved the modal is closed. Reopening the modal will load the users input data from the most recent draft

- Delete orders by selecting their corresponding checkboxs and then click 'Delete Selected'

- Global quickfilter search can be used to search order IDs and all other data

- Order type can be selected to fetch only specific orders

- Adjust the user by clicking the user icon at the top to render a modal. This will adjust the created by for future order creation. 
![Screenshot 2023-03-16 at 3 24 26 PM](https://user-images.githubusercontent.com/43679682/225731412-8d4710c6-f81a-4abc-bd4f-0a19aed6ac91.png)

# Future Implementations
- Error handling around the API calls
- Component testing with Jest/Enzyme
