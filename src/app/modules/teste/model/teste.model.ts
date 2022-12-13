export interface TesteModel{
  title: string;
  subTitle: string;
  button: string;
  imageGame: string;
  listGame: Array<ListGamesModel>
}

export interface ListGamesModel{
  logoGame: string
  gameActive: boolean
}
