export interface SearchParams {
  equipment?: string;
  workoutType?: string;
  random?: string;
  exclude?: string;
  programId?: string;
}

export function parseSearchParams(params: SearchParams) {
  const equipment = params.equipment ? params.equipment.split(",") : [];
  return {
    equipment,
    workoutType: params.workoutType || "",
    random: params.random || "",
    exclude: params.exclude,
    programId: params.programId,
  };
}