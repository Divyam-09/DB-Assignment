1.	How to  Explain the relationship between the "Product" and "Product_Category" entities from the above details.
•	“Product” Entity represents all products in the database. Each product has attributes such as ID, name, description, price, etc…
•	“Product_Category” defines categories to products. Each category has attributes such as ID, name, description, etc.
•	The relationship between the "Product" and "Product_Category" entities is established through a foreign key relationship. In this diagram, the "Product" entity contains a column named category_id, which serves as a foreign key referencing the id column in the "Product_Category" table.
•	This relationship is called “many-to-one” relationship where many products can belong to a single product category and also each product has associated with one product category and each product category can have multiple products which belongs to it.
•	The category_id column in the "Product" table acts as a link to the respective category for each product. By referencing the id column in the "Product_Category" table, the database establishes a connection between products and their respective categories.
•	This relationship is also ensures effective categorization and organization of products within the system, enabling users to browse and search for products based on their categories.

2.	How could you ensure that each product in the "Product" table has a valid category assigned to it?
•	Foreign Key Constraint: By defining a foreign key constraint on the category_id column in the "Product" table, referencing the id column in the "Product_Category" table. This ensures that every value in the category_id column of the "Product" table must exist in the id column of the "Product_Category" table.
•	Perform “ON DELETE”, “ON UPDATE” actions when a referenced row in the "Product_Category" table is deleted or updated. For ex: RESTRICT(Prevent deletion or updating of the referenced row if it has dependent rows in the "Product" table), Set the category_id in the "Product" table to NULL if the referenced row is deleted or updated.
•	NO ACTION: Similar to RESTRICT, it prevents deletion or updating of the referenced row and delete/update the corresponding rows in the "Product" table.
•	Specify validation rules and database triggers to ensures valid category assigned to each product before insertion or update and create a trigger to check if the category_id value exists in the "Product_Category" table before allowing the operation to proceed.
