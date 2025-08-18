export interface ResultPageProps {
  searchParams: Promise<{
    equipment?: string;
    workoutType?: string;
    currentId?: string;
    programId?: string;
  }>;
}