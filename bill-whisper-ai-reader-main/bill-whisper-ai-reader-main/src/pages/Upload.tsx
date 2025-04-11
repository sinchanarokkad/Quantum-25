
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockTemplates, currentUser } from '@/data/mockData';
import { processBillImage } from '@/services/billProcessingService';
import { BillData } from '@/types';
import { Upload, Check, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UploadPage: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedBill, setProcessedBill] = useState<BillData | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setProcessedBill(null);
    }
  };

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value);
    setProcessedBill(null);
  };

  const handleUpload = async () => {
    if (!selectedFile || !selectedTemplate) {
      toast({
        title: "Missing Information",
        description: "Please select both a file and a template.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      const processedData = await processBillImage(selectedFile, selectedTemplate, currentUser.id);
      setProcessedBill(processedData);
      toast({
        title: "Bill Processed Successfully",
        description: `Confidence: ${(processedData.confidence * 100).toFixed(1)}%`,
      });
    } catch (error) {
      console.error("Processing failed:", error);
      toast({
        title: "Processing Failed",
        description: "There was an error processing your bill.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('bill-file-input')?.click();
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Upload Bills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Bill Image</CardTitle>
              <CardDescription>
                Select a template and upload your bill image
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Bill Template</label>
                <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockTemplates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>{template.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Bill Image</label>
                <input 
                  id="bill-file-input"
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div 
                  className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:bg-gray-50 cursor-pointer"
                  onClick={triggerFileInput}
                >
                  {selectedFile ? (
                    <div className="space-y-2">
                      <Check className="mx-auto h-8 w-8 text-green-500" />
                      <p className="text-sm font-medium">{selectedFile.name}</p>
                      <p className="text-xs text-gray-500">
                        {(selectedFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="text-sm font-medium">Drop your bill image here or click to browse</p>
                      <p className="text-xs text-gray-500">
                        Supports JPG, PNG, and PDF up to 10MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <Button 
                className="w-full" 
                onClick={handleUpload} 
                disabled={!selectedFile || !selectedTemplate || isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Process Bill'
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>
                Extracted data will appear here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {processedBill ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Processed Successfully</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-auto">
                      Confidence: {(processedBill.confidence * 100).toFixed(1)}%
                    </span>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 text-sm font-medium border-b">
                      Extracted Data
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        {Object.entries(processedBill.extractedData).map(([key, value]) => (
                          <div key={key} className="grid grid-cols-2">
                            <div className="text-sm font-medium text-gray-500">{key}:</div>
                            <div className="text-sm">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-60 text-gray-400">
                  <AlertCircle className="h-10 w-10 mb-2" />
                  <p className="text-sm">No data extracted yet</p>
                  <p className="text-xs">Upload and process a bill to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default UploadPage;
