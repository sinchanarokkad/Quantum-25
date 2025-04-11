
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockBillTypeChartData, mockStatistics } from '@/data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const StatisticsPage: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Statistics</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Language Distribution and Confidence Level Charts removed as requested */}

          {/* Bill Type Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Bill Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mockBillTypeChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {mockBillTypeChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, 'Bills']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Summary Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Processing Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-4xl font-bold text-blue-600">
                      {mockStatistics.totalBills}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Total Bills</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-4xl font-bold text-green-600">
                      {mockStatistics.processedBills}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Processed Bills</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-4xl font-bold text-amber-600">
                      {mockStatistics.pendingBills}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Pending Bills</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-4xl font-bold text-purple-600">
                      {(mockStatistics.averageConfidence * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Average Confidence</div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-green-600">
                    {(mockStatistics.successRate * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default StatisticsPage;
