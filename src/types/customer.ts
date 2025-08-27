export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  email: string | null;
  phone: string | null;
  date_of_birth: string | null;
  address: string | null;
  skin_type: 'normal' | 'dry' | 'oily' | 'combination' | 'sensitive' | null;
  allergies: string | null;
  notes: string | null;
  preferred_staff_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateCustomer {
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
  date_of_birth?: string;
  address?: string;
  skin_type?: 'normal' | 'dry' | 'oily' | 'combination' | 'sensitive';
  allergies?: string;
  notes?: string;
  preferred_staff_id?: string;
}

export interface UpdateCustomer extends Partial<CreateCustomer> {
  id: string;
}