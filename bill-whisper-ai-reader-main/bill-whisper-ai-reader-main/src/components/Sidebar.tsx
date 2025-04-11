
import React from 'react';
import { BarChart3Icon, FilePenIcon, HomeIcon, LayoutTemplateIcon, SettingsIcon, UploadIcon, UsersIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("w-64 bg-white border-r border-gray-200 h-full flex flex-col", className)}>
      <div className="p-4">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Main</h2>
        <nav className="mt-3 space-y-1">
          <NavLink to="/" className={({ isActive }) => cn(
            "flex items-center px-3 py-2 text-sm rounded-md",
            isActive 
              ? "bg-blue-50 text-blue-700 font-medium" 
              : "text-gray-700 hover:bg-gray-100"
          )}>
            <HomeIcon className="w-4 h-4 mr-3" />
            Dashboard
          </NavLink>
          <NavLink to="/bills" className={({ isActive }) => cn(
            "flex items-center px-3 py-2 text-sm rounded-md",
            isActive 
              ? "bg-blue-50 text-blue-700 font-medium" 
              : "text-gray-700 hover:bg-gray-100"
          )}>
            <FilePenIcon className="w-4 h-4 mr-3" />
            Bills
          </NavLink>
          <NavLink to="/upload" className={({ isActive }) => cn(
            "flex items-center px-3 py-2 text-sm rounded-md",
            isActive 
              ? "bg-blue-50 text-blue-700 font-medium" 
              : "text-gray-700 hover:bg-gray-100"
          )}>
            <UploadIcon className="w-4 h-4 mr-3" />
            Upload Bills
          </NavLink>
          <NavLink to="/templates" className={({ isActive }) => cn(
            "flex items-center px-3 py-2 text-sm rounded-md",
            isActive 
              ? "bg-blue-50 text-blue-700 font-medium" 
              : "text-gray-700 hover:bg-gray-100"
          )}>
            <LayoutTemplateIcon className="w-4 h-4 mr-3" />
            Templates
          </NavLink>
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200 mt-2">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Analytics</h2>
        <nav className="mt-3 space-y-1">
          <NavLink to="/stats" className={({ isActive }) => cn(
            "flex items-center px-3 py-2 text-sm rounded-md",
            isActive 
              ? "bg-blue-50 text-blue-700 font-medium" 
              : "text-gray-700 hover:bg-gray-100"
          )}>
            <BarChart3Icon className="w-4 h-4 mr-3" />
            Statistics
          </NavLink>
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200 mt-auto">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Admin</h2>
        <nav className="mt-3 space-y-1">
          <NavLink to="/users" className={({ isActive }) => cn(
            "flex items-center px-3 py-2 text-sm rounded-md",
            isActive 
              ? "bg-blue-50 text-blue-700 font-medium" 
              : "text-gray-700 hover:bg-gray-100"
          )}>
            <UsersIcon className="w-4 h-4 mr-3" />
            Users
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => cn(
            "flex items-center px-3 py-2 text-sm rounded-md",
            isActive 
              ? "bg-blue-50 text-blue-700 font-medium" 
              : "text-gray-700 hover:bg-gray-100"
          )}>
            <SettingsIcon className="w-4 h-4 mr-3" />
            Settings
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
