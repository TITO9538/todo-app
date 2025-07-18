import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useItems() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/to_do_list");
    return response.data;
  };

  useEffect(() => {
    fetchData()
      .then((rs) => setItems(rs))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const objectFormData = Object.fromEntries(formdata.entries());

    await axios.post("http://localhost:3000/api/v1/to_do_list", objectFormData);
    const response = await fetchData();
    setItems(response);
  };

  async function deleteItem(id) {
    await axios.delete(`http://localhost:3000/api/v1/to_do_list/${id}`);
    const updateItems = await fetchData();
    setItems(updateItems);
  }

  async function updateStatusItem(item) {
    const status = !item.status;
    await axios.put(`http://localhost:3000/api/v1/to_do_list/${item.id}`, {
      status: status,
    });
    const updatedItems = await fetchData();
    setItems(updatedItems);
  }

  console.log(items);

  return {
    items,
    setItems,
    fetchData,
    handleSubmit,
    deleteItem,
    updateStatusItem,
  };
}
