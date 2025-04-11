
import { BillData, BillTemplate, UserProfile, StatisticData } from "@/types";

// Mock user profiles
export const mockUsers: UserProfile[] = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    avatarUrl: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
  },
  {
    id: "u2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    avatarUrl: "https://ui-avatars.com/api/?name=Jane+Smith&background=FF5733&color=fff",
  },
  {
    id: "u3",
    name: "Alex Wong",
    email: "alex@example.com",
    role: "user",
    avatarUrl: "https://ui-avatars.com/api/?name=Alex+Wong&background=27AE60&color=fff",
  },
];

// Mock bill templates
export const mockTemplates: BillTemplate[] = [
  {
    id: "t1",
    name: "Utility Bill",
    fields: [
      { id: "f1", name: "Company Name", type: "text", required: true },
      { id: "f2", name: "Bill Date", type: "date", required: true },
      { id: "f3", name: "Due Date", type: "date", required: true },
      { id: "f4", name: "Amount Due", type: "currency", required: true },
      { id: "f5", name: "Account Number", type: "text", required: true },
    ],
    createdAt: "2023-05-10T10:30:00Z",
    updatedAt: "2023-05-10T10:30:00Z",
  },
  {
    id: "t2",
    name: "Invoice",
    fields: [
      { id: "f6", name: "Vendor Name", type: "text", required: true },
      { id: "f7", name: "Invoice Number", type: "text", required: true },
      { id: "f8", name: "Issue Date", type: "date", required: true },
      { id: "f9", name: "Due Date", type: "date", required: true },
      { id: "f10", name: "Total Amount", type: "currency", required: true },
      { id: "f11", name: "Tax Amount", type: "currency", required: true },
    ],
    createdAt: "2023-06-15T14:20:00Z",
    updatedAt: "2023-06-18T09:45:00Z",
  },
  {
    id: "t3",
    name: "Receipt",
    fields: [
      { id: "f12", name: "Store Name", type: "text", required: true },
      { id: "f13", name: "Purchase Date", type: "date", required: true },
      { id: "f14", name: "Total Amount", type: "currency", required: true },
      { id: "f15", name: "Payment Method", type: "text", required: false },
    ],
    createdAt: "2023-07-05T16:10:00Z",
    updatedAt: "2023-07-05T16:10:00Z",
  },
];

// Mock bill data
export const mockBills: BillData[] = [
  {
    id: "b1",
    fileName: "electric_bill_june.jpg",
    uploadDate: "2023-06-15T10:30:00Z",
    processedDate: "2023-06-15T10:31:20Z",
    status: "completed",
    extractedData: {
      "Company Name": "Electric Company Inc.",
      "Bill Date": "2023-06-01",
      "Due Date": "2023-06-25",
      "Amount Due": "$124.50",
      "Account Number": "EL-78942",
    },
    originalImageUrl: "/bills/electric_bill.jpg",
    language: "en",
    confidence: 0.92,
    userId: "u1",
    templateId: "t1",
  },
  {
    id: "b2",
    fileName: "water_bill_june.jpg",
    uploadDate: "2023-06-18T14:25:00Z",
    processedDate: "2023-06-18T14:26:15Z",
    status: "completed",
    extractedData: {
      "Company Name": "City Water Services",
      "Bill Date": "2023-06-05",
      "Due Date": "2023-06-30",
      "Amount Due": "$78.25",
      "Account Number": "WS-56234",
    },
    originalImageUrl: "/bills/water_bill.jpg",
    language: "en",
    confidence: 0.89,
    userId: "u1",
    templateId: "t1",
  },
  {
    id: "b3",
    fileName: "internet_bill.jpg",
    uploadDate: "2023-06-20T09:15:00Z",
    processedDate: "2023-06-20T09:16:40Z",
    status: "completed",
    extractedData: {
      "Company Name": "Fast Internet Provider",
      "Bill Date": "2023-06-10",
      "Due Date": "2023-07-05",
      "Amount Due": "$89.99",
      "Account Number": "FIP-34572",
    },
    originalImageUrl: "/bills/internet_bill.jpg",
    language: "en",
    confidence: 0.95,
    userId: "u2",
    templateId: "t1",
  },
  {
    id: "b4",
    fileName: "office_supplies_invoice.jpg",
    uploadDate: "2023-06-22T11:40:00Z",
    processedDate: "2023-06-22T11:41:30Z",
    status: "completed",
    extractedData: {
      "Vendor Name": "Office Supply Co.",
      "Invoice Number": "INV-2023-6745",
      "Issue Date": "2023-06-20",
      "Due Date": "2023-07-20",
      "Total Amount": "$235.75",
      "Tax Amount": "$21.43",
    },
    originalImageUrl: "/bills/invoice.jpg",
    language: "en",
    confidence: 0.91,
    userId: "u1",
    templateId: "t2",
  },
  {
    id: "b5",
    fileName: "grocery_receipt.jpg",
    uploadDate: "2023-06-25T16:20:00Z",
    processedDate: "2023-06-25T16:21:10Z",
    status: "completed",
    extractedData: {
      "Store Name": "FreshMart",
      "Purchase Date": "2023-06-25",
      "Total Amount": "$87.65",
      "Payment Method": "Credit Card",
    },
    originalImageUrl: "/bills/receipt.jpg",
    language: "en",
    confidence: 0.88,
    userId: "u3",
    templateId: "t3",
  },
  {
    id: "b6",
    fileName: "phone_bill_spanish.jpg",
    uploadDate: "2023-06-26T10:15:00Z",
    processedDate: "2023-06-26T10:16:25Z",
    status: "completed",
    extractedData: {
      "Company Name": "Telecom Spain",
      "Bill Date": "2023-06-15",
      "Due Date": "2023-07-10",
      "Amount Due": "€45.50",
      "Account Number": "TSP-98735",
    },
    originalImageUrl: "/bills/phone_bill_spanish.jpg",
    language: "es",
    confidence: 0.85,
    userId: "u2",
    templateId: "t1",
  },
  {
    id: "b7",
    fileName: "blurry_gas_bill.jpg",
    uploadDate: "2023-06-27T14:30:00Z",
    processedDate: "2023-06-27T14:32:00Z",
    status: "completed",
    extractedData: {
      "Company Name": "Gas Services Ltd.",
      "Bill Date": "2023-06-20",
      "Due Date": "2023-07-15",
      "Amount Due": "$67.80",
      "Account Number": "GSL-12467",
    },
    originalImageUrl: "/bills/blurry_gas_bill.jpg",
    language: "en",
    confidence: 0.72,
    userId: "u1",
    templateId: "t1",
  },
];

// Mock statistics data
export const mockStatistics: StatisticData = {
  totalBills: mockBills.length,
  processedBills: mockBills.filter(bill => bill.status === "completed").length,
  pendingBills: mockBills.filter(bill => bill.status === "processing").length,
  successRate: 0.95,
  averageConfidence: 0.87,
};

// Mock chart data for languages
export const mockLanguageChartData = [
  { name: "English", value: 6 },
  { name: "Spanish", value: 1 },
  { name: "French", value: 0 },
  { name: "German", value: 0 },
  { name: "Chinese", value: 0 },
];

// Mock chart data for confidence levels
export const mockConfidenceChartData = [
  { name: "95%+", value: 1 },
  { name: "90-95%", value: 3 },
  { name: "85-90%", value: 2 },
  { name: "80-85%", value: 0 },
  { name: "<80%", value: 1 },
];

// Mock chart data for bill types
export const mockBillTypeChartData = [
  { name: "Utility Bills", value: 5 },
  { name: "Invoices", value: 1 },
  { name: "Receipts", value: 1 },
];

// Current user (for UI state)
export const currentUser = mockUsers[0];
