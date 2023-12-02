import { TeamModel } from './team-model';

export interface MatchesModel {
    id: number;
    scoreOne: number;
    scoreTwo: number;
    teamOne: TeamModel;
    teamTwo: TeamModel;
}
