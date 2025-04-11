
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockTemplates } from '@/data/mockData';
import { LayoutTemplate, Plus, Edit, Trash2, Eye } from 'lucide-react';

const TemplatesPage: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Templates</h1>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Template
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTemplates.map((template) => (
            <Card key={template.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-md font-semibold">{template.name}</CardTitle>
                <LayoutTemplate className="h-5 w-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500 mb-4">
                  Created {new Date(template.createdAt).toLocaleDateString()}
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Fields ({template.fields.length})</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {template.fields.slice(0, 3).map((field) => (
                      <li key={field.id} className="flex items-center justify-between">
                        <span>{field.name}</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {field.type}
                        </span>
                      </li>
                    ))}
                    {template.fields.length > 3 && (
                      <li className="text-sm text-gray-400">
                        + {template.fields.length - 3} more fields
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex items-center justify-end space-x-2 mt-4 pt-2 border-t border-gray-100">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TemplatesPage;
