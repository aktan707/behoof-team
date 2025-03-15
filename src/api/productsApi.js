import {supabase} from "../supabase/index.js";

class CatalogApi {

  async getAllCatalog() {
    let {data: products} = await supabase
      .from('catalog')
      .select('*')
    console.log(products);
    return products;
  }

  async getCatalogById(id) {
    let {data: products} = await supabase
      .from('products')
      .select('*')
      .eq('catalog_id', id)
    console.log(products);
    return products;
  }

  async getProductsById(id) {
    let {data} = await supabase
      .from('sup_products')
      .select('*')
      .eq('products_id', id)
    console.log(data);
    return data;
  }
}

export const catalogApi = new CatalogApi()

