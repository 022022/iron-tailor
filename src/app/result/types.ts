export interface ResultPageProps {
  searchParams: Promise<{
    equipment?: string;
    workoutType?: string;
    random?: string;
    currentId?: string;
  }>;
}