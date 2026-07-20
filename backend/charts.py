import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("cleaned_sales.csv")
df["Order Date"] = pd.to_datetime(df["Order Date"])

#Monthly Sales Chart
monthly_sales = df.groupby("Month")["Sales"].sum()
month_order = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
]

monthly_sales = monthly_sales.reindex(month_order)
plt.figure(figsize=(10,5))

monthly_sales.plot(kind="line")

plt.title("Monthly Sales")

plt.xlabel("Month")

plt.ylabel("Sales")

plt.show()
plt.savefig("monthly_sales.png")

#Category-wise Sales
category_sales = df.groupby("Category")["Sales"].sum()

plt.figure(figsize=(8,5))

category_sales.plot(kind="bar")

plt.title("Sales by Category")

plt.xlabel("Category")

plt.ylabel("Sales")

plt.show()
plt.savefig("category_sales.png")

#Region-wise Sales
region_sales = df.groupby("Region")["Sales"].sum()

plt.figure(figsize=(8,5))

region_sales.plot(kind="bar")

plt.title("Region-wise Sales")

plt.xlabel("Region")

plt.ylabel("Sales")

plt.show()
plt.savefig("region_sales.png")

#Top 10 Products
top_products = (
    df.groupby("Product Name")["Sales"]
      .sum()
      .sort_values(ascending=False)
      .head(10)
)

plt.figure(figsize=(12,6))

top_products.plot(kind="bar")

plt.title("Top 10 Products")

plt.xlabel("Product")

plt.ylabel("Sales")

plt.xticks(rotation=45)

plt.show()
plt.savefig("top_products.png")

