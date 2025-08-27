import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { CustomerList } from '@/components/customers/CustomerList';
import { CustomerDialog } from '@/components/customers/CustomerDialog';
import { useCustomers } from '@/hooks/useCustomers';
import { Customer } from '@/types/customer';

const Customers = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const { customers, loading, createCustomer, updateCustomer, deleteCustomer } = useCustomers();

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    await deleteCustomer(id);
  };

  const handleSave = async (customerData: any) => {
    if (editingCustomer) {
      return await updateCustomer({ ...customerData, id: editingCustomer.id });
    } else {
      return await createCustomer(customerData);
    }
  };

  const handleDialogClose = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setEditingCustomer(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Customer Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage your beauty center customers and their information
            </p>
          </div>
          <Button onClick={() => setDialogOpen(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Customer
          </Button>
        </div>

        <CustomerList
          customers={customers}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <CustomerDialog
          open={dialogOpen}
          onOpenChange={handleDialogClose}
          customer={editingCustomer}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default Customers;