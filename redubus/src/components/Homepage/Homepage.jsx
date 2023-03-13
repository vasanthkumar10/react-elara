import React, { useState } from "react";
import { Form, Input, DatePicker, Button, Table } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import axios from "axios";
import "./Homepage.css";

export function Homepage() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(null);
  const [data, setData] = useState(null);

  const submitHandler = async () => {
    // console.log(source, destination, date);
    const response = await axios.get(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}&date=${date}`
    );

    const data = response.data.map((bus) => {
      return {
        key: bus.id,
        name: bus.busName,
        departure: bus.departureTime,
        arrival: bus.arrivalTime,
        rating: "8/10",
        price: bus.ticketPrice,
      };
    });

    setData(data);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Departure",
      dataIndex: "departure",
      key: "departure",
    },
    {
      title: "Arrival",
      dataIndex: "arrival",
      key: "arrival",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <div className="form-container">
      <Form className="form-wrapper">
        <div>
          <label htmlFor="from">From</label>
          <Form.Item
            id="from"
            name={"from"}
            rules={[
              {
                required: true,
                message: "Please input your from location!",
              },
            ]}
          >
            <input value={source} onChange={(e) => setSource(e.target.value)} />
          </Form.Item>
        </div>

        <div>
          <Form.Item id="swap">
            <Button
              onClick={(e) => {
                const currentSource = source;
                const currentDestination = destination;
                setDestination(currentSource);
                setSource(currentDestination);
                console.log("clicked", source, destination);
              }}
            >
              <SwapOutlined />
            </Button>
          </Form.Item>
        </div>

        <div>
          <label htmlFor="to">To</label>
          <Form.Item
            id="to"
            name={"to"}
            rules={[
              {
                required: true,
                message: "Please input your to location!",
              },
            ]}
          >
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <Form.Item>
            <DatePicker
              id="date"
              onChange={(date, dateString) => {
                console.log(date, dateString);
                setDate(dateString);
              }}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            danger
            htmlType="submit"
            onClick={submitHandler}
          >
            Search buses
          </Button>
        </Form.Item>
      </Form>
      {data ? (
        <Table columns={columns} dataSource={data} />
      ) : (
        <h2>Image will come</h2>
      )}

      <h2>
        {source} {destination}
      </h2>
    </div>
  );
}
