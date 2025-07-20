export interface ResultPageProps {
  searchParams: Promise<{
    equipment?: string;
    workoutType?: string;
    random?: string;
    exclude?: string;
  }>;
}