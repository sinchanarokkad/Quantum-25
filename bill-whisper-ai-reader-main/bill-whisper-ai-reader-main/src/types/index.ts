
export type BillData = {
  id: string;
  fileName: string;
  uploadDate: string;
  processedDate: string;
  status: 'processing' | 'completed' | 'error';
  extractedData: Record<string, string>;
  originalImageUrl: string;
  language: string;
  confidence: number;
  userId: string;
  templateId: string;
};

export type BillTemplate = {
  id: string;
  name: string;
  fields: Array<{
    id: string;
    name: string;
    type: 'text' | 'number' | 'date' | 'currency';
    required: boolean;
  }>;
  createdAt: string;
  updatedAt: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatarUrl: string;
};

export type ChartData = {
  name: string;
  value: number;
};

export type StatisticData = {
  totalBills: number;
  processedBills: number;
  pendingBills: number;
  successRate: number;
  averageConfidence: number;
};
