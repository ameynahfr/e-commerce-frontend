import React from 'react';
const Dashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
                <p className="text-gray-600 mb-8">
                    Manage your e-commerce store, view orders, and update products.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-800 mb-2">Orders</h2>
                        <p className="text-blue-600">View and manage customer orders.</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-green-800 mb-2">Products</h2>
                        <p className="text-green-600">Add, edit, and update product listings.</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Analytics</h2>
                        <p className="text-yellow-600">Analyze your e-commerce performance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
