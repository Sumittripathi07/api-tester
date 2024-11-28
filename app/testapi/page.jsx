"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

// import { Spinner } from "@chakra-ui/react";
export default function APITester() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState("{}");
  const [body, setBody] = useState("{}");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseDetails, setResponseDetails] = useState({
    status: null,
    time: null,
    size: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setResponseDetails({ status: null, time: null, size: null });

    const startTime = performance.now();
    try {
      const parsedHeaders = JSON.parse(headers || "{}");
      const parsedBody = JSON.parse(body || "{}");
      const res = await fetch(url, {
        method,
        headers: parsedHeaders,
        body: method !== "GET" ? JSON.stringify(parsedBody) : undefined,
      });
      const endTime = performance.now();

      const responseData = await res.json();
      const size = new TextEncoder().encode(
        JSON.stringify(responseData)
      ).length;

      setResponse(responseData);
      setResponseDetails({
        status: res.status,
        time: Math.round(endTime - startTime),
        size,
      });
    } catch (error) {
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(JSON.stringify(response, null, 2));
      alert("Response copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        className="max-w-4xl p-6 mx-auto bg-white shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="mb-4 text-3xl font-extrabold text-center text-gray-900">
          🌐 API Tester
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="p-4 border shadow-md">
            <label className="block font-medium text-gray-700">
              API Endpoint URL
            </label>
            <Input
              type="text"
              placeholder="https://example.com/api"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="mt-1"
              required
            />
          </Card>

          <Card className="p-4 border shadow-md">
            <label className="block font-medium text-gray-700">
              HTTP Method
            </label>
            <select
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </Card>

          <Card className="p-4 border shadow-md">
            <label className="block font-medium text-gray-700">
              Headers (JSON)
            </label>
            <Textarea
              placeholder='{"Authorization": "Bearer token"}'
              value={headers}
              onChange={(e) => setHeaders(e.target.value)}
              className="mt-1"
            />
          </Card>

          <Card className="p-4 border shadow-md">
            <label className="block font-medium text-gray-700">
              Body (JSON)
            </label>
            <Textarea
              placeholder='{"key": "value"}'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={method === "GET"}
              className="mt-1"
            />
          </Card>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center"
          >
            <Button
              type="submit"
              className="px-6 py-2 font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400"
            >
              {loading ? "LOADING>......" : "Send Request 🚀"}
            </Button>
          </motion.div>
        </form>

        {response && (
          <motion.div
            className="p-4 mt-6 overflow-x-auto bg-gray-100 rounded-lg shadow-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* <h2 className="text-lg font-bold text-gray-800">Response:</h2>
            <pre className="mb-4 text-sm text-gray-600">
              {JSON.stringify(response, null, 2)}
            </pre> */}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <p>
                  <strong>Status:</strong> {responseDetails.status || "N/A"}
                </p>
                <p>
                  <strong>Time:</strong> {responseDetails.time} ms
                </p>
                <p>
                  <strong>Size:</strong> {responseDetails.size} bytes
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCopy}
                className="px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400"
              >
                Copy Response 📋
              </motion.button>
            </div>
            <h2 className="mt-10 text-lg font-bold text-gray-800">Response:</h2>
            <pre className="mb-4 text-sm text-gray-600">
              {JSON.stringify(response, null, 2)}
            </pre>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
