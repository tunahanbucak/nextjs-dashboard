import Table from '@/app/ui/customers/table';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { customers } from '@/app/lib/placeholder-data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CustomersTable customers={customers} />
      </div>
    </div>
  );
}
