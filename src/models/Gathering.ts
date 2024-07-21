export interface Gathering {
  id: string,
  title: string,
  description: string,
  createdDate: Date,
  targetAmount: number,
  currentAmount: number,
  membersCount: number,
  isVerified: boolean
}