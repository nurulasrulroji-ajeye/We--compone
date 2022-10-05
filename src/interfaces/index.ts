export interface Service {
  status: number
  message: string
  data: dataService[]
}
export interface dataService {
  id: number
  uuid: string
  slug: string
  name: string
  desc: string
  icon: string
  status: boolean
  created_at: string
  updated_at: string
}