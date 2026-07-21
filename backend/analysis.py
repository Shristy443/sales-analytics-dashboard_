# import pandas as pd

# df = pd.read_csv("cleaned_sales.csv")

# df["Order Date"] = pd.to_datetime(df["Order Date"])

# #pandas does sum of sales column 
# total_sales = df["Sales"].sum()

# print("Total Sales:", total_sales)

# # Total Sales
# # ------------
# # Number of Orders
# average_sales = df["Sales"].mean()

# print("Average Sale:", average_sales)

# #highest sale
# highest_sale = df["Sales"].max()

# print("Highest Sale:", highest_sale)

# #lowest sale
# lowest_sale = df["Sales"].min()

# print("Lowest Sale:", lowest_sale)


# #Number of Orders
# total_orders = df["Order ID"].nunique()

# print("Total Orders:", total_orders)

# #Which product category earns the most revenue?
# category_sales = df.groupby("Category")["Sales"].sum()

# print(category_sales)

# #Region-wise Sales
# region_sales = df.groupby("Region")["Sales"].sum()

# print(region_sales)

# #Top 10 Products
# top_products = (
#     df.groupby("Product Name")["Sales"]
#       .sum()
#       .sort_values(ascending=False)
#       .head(10)
# )

# print(top_products)

# #Monthly Sales
# monthly_sales = (
#     df.groupby("Month")["Sales"]
#       .sum()
# )

# print(monthly_sales)
import os
import pandas as pd

# df = pd.read_csv("cleaned_sales.csv")
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(BASE_DIR, "cleaned_sales.csv")

df = pd.read_csv(CSV_PATH)
df["Order Date"] = pd.to_datetime(df["Order Date"])

# Create Year and Month columns
df["Year"] = df["Order Date"].dt.year
df["Month"] = df["Order Date"].dt.month_name()
print(df.columns)   # Temporary - remove later
def get_summary():
    return {
        "total_sales": round(df["Sales"].sum(), 2),
        "average_sales": round(df["Sales"].mean(), 2),
        "highest_sale": round(df["Sales"].max(), 2),
        "lowest_sale": round(df["Sales"].min(), 2),
        "total_orders": df["Order ID"].nunique()
    }
# Category Sales
def category_sales(year=None):

    data = df.copy()

    if year:
        data = data[data["Year"] == int(year)]

    result = (
        data.groupby("Category")["Sales"]
        .sum()
        .reset_index()
    )

    return result.to_dict(orient="records")
# Region Sales
def region_sales(year=None):

    data = df.copy()

    if year:
        data = data[data["Year"] == int(year)]

    result = (
        data.groupby("Region")["Sales"]
        .sum()
        .reset_index()
    )

    return result.to_dict(orient="records")
# Monthly Sales
def monthly_sales(year=None):

    monthly = df.copy()

    if year:
        monthly = monthly[monthly["Year"] == int(year)]

    monthly["Month"] = monthly["Order Date"].dt.strftime("%b")

    order = [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
    ]

    data = (
        monthly.groupby("Month")["Sales"]
        .sum()
        .reindex(order)
        .fillna(0)
        .reset_index()
    )

    return data.to_dict(orient="records")

# Top 10 Products
def top_products():
    data = (
        df.groupby("Product Name")["Sales"]
        .sum()
        .sort_values(ascending=False)
        .head(10)
        .reset_index()
    )
    return data.to_dict(orient="records")

def search_products(query):
    result = df[
        df["Product Name"].str.contains(query, case=False, na=False)
    ][["Product Name","Category", "Sales"]]

    return result.head(20).to_dict(orient="records")

def get_years():
    years = sorted(df["Year"].unique().tolist())
    return [int(year) for year in years]

def summary_by_year(year):
    filtered = df[df["Year"] == int(year)]

    return {
        "total_sales": round(filtered["Sales"].sum(), 2),
        "average_sales": round(filtered["Sales"].mean(), 2),
        "highest_sale": round(filtered["Sales"].max(), 2),
        "lowest_sale": round(filtered["Sales"].min(), 2),
        "total_orders": filtered["Order ID"].nunique()
    }

def dashboard_stats():

    return {

        "customers": int(df["Customer ID"].nunique()),

        "products": int(df["Product ID"].nunique()),

        "categories": int(df["Category"].nunique()),

        "regions": int(df["Region"].nunique())

    }