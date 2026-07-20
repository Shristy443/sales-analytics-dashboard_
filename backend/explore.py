import pandas as pd
#read data from csv file in dataframe
# df =pd.read_csv("sales_data_sample.csv",encoding="latin1")
df=pd.read_csv("SampleStoreData.csv")
# print(df.head())
# # Dataset shape
# print("\nShape:", df.shape)

# # Column names
# print("\nColumns:")
# print(df.columns)

# # Data types
# print("\nData Types:")
# print(df.dtypes)

# # Missing values
# print("\nMissing Values:")
# print(df.isnull().sum())

# # Duplicate rows
# print("\nDuplicate Rows:", df.duplicated().sum())

# # Basic statistics
# print("\nStatistics:")
# print(df.describe())

df["Order Date"] = pd.to_datetime(df["Order Date"], dayfirst=True)
df["Ship Date"] = pd.to_datetime(df["Ship Date"], dayfirst=True)

# print(df[["Order Date", "Ship Date"]].head())
# print(df.dtypes)

# # Remove rows with missing values
# df = df.dropna()

# # Check if any missing values remain
# print(df.isnull().sum())

# df["Year"] = df["Order Date"].dt.year
# df["Month"] = df["Order Date"].dt.month_name()
# print(df[["Order Date", "Year", "Month"]].head())


# Create Year and Month columns
df["Year"] = df["Order Date"].dt.year
df["Month"] = df["Order Date"].dt.month_name()

# Check the new columns
print(df[["Order Date", "Year", "Month"]].head())

df.to_csv("cleaned_sales.csv", index=False)

print("Cleaned dataset saved successfully!")