export class ContactResponse {
  id: number;
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export class ContactCreateRequest {
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export class ContactUpdateRequest {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export class SearchContactRequest {
  name?: string;
  email?: string;
  phone?: string;
  page: number;
  size: number;
}
