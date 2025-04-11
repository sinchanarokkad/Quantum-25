
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockBills, mockStatistics } from '@/data/mockData';
import { BillData } from '@/types';
import { ArrowUpIcon, AlertCircleIcon } from 'lucide-react';

export const Dashboard: React.FC = () => {
  // Get most recent bills
  const recentBills = [...mockBills].sort(
    (a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
  ).slice(0, 5);
  
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStatistics.totalBills}</div>
            <p className="text-xs text-gray-500 mt-1">From all users</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Processed Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStatistics.processedBills}</div>
            <div className="flex items-center mt-1">
              <ArrowUpIcon className="h-3 w-3 text-green-600 mr-1" />
              <p className="text-xs text-green-600">100% Success Rate</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStatistics.pendingBills}</div>
            <p className="text-xs text-gray-500 mt-1">Awaiting processing</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(mockStatistics.averageConfidence * 100).toFixed(1)}%</div>
            <div className="flex items-center mt-1">
              {mockStatistics.averageConfidence >= 0.85 ? (
                <>
                  <ArrowUpIcon className="h-3 w-3 text-green-600 mr-1" />
                  <p className="text-xs text-green-600">Above threshold</p>
                </>
              ) : (
                <>
                  <AlertCircleIcon className="h-3 w-3 text-amber-600 mr-1" />
                  <p className="text-xs text-amber-600">Needs review</p>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts section removed as requested */}
      
      {/* Recent Bills */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Bills</CardTitle>
          <CardDescription>Last 5 bills processed by the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-3 font-medium text-gray-500">Filename</th>
                  <th className="pb-3 font-medium text-gray-500">Template</th>
                  <th className="pb-3 font-medium text-gray-500">Date</th>
                  <th className="pb-3 font-medium text-gray-500">Confidence</th>
                  <th className="pb-3 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBills.slice(5).map((bill) => (
                  <BillRow key={bill.id} bill={bill} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const BillRow: React.FC<{ bill: BillData }> = ({ bill }) => {
  const template = bill.templateId === 't1' 
    ? 'Utility Bill' 
    : bill.templateId === 't2' 
      ? 'Invoice' 
      : 'Receipt';
  
  const uploadDate = new Date(bill.uploadDate).toLocaleDateString();
  const confidencePercentage = (bill.confidence * 100).toFixed(1);
  
  return (
    <tr className="border-b last:border-b-0">
      <td className="py-3 pr-4">{bill.fileName}</td>
      <td className="py-3 pr-4">{template}</td>
      <td className="py-3 pr-4">{uploadDate}</td>
      <td className="py-3 pr-4">
        <div className="flex items-center">
          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${confidencePercentage}%` }}
            />
          </div>
          <span>{confidencePercentage}%</span>
        </div>
      </td>
      <td className="py-3">
        <span className={`px-2 py-1 rounded-full text-xs ${
          bill.status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : bill.status === 'processing' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-red-100 text-red-800'
        }`}>
          {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
        </span>
      </td>
    </tr>
  );
};

export default Dashboard;
