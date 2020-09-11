import { Action } from '@ngrx/store';
import { CreateNewShortLinkDto, ShortLinkDetailsDto } from './home.models';

export const homeActions = {
  homePostUrl: '[home] postUrl',
  homePostUrlFailed: '[home] postUrlFailed',
  homePostUrlCompleted: '[home] postUrlCompleted',
};

export class HomePostUrlAction implements Action {
  readonly type = homeActions.homePostUrl;
  public model: CreateNewShortLinkDto;
  constructor(public endpointUrl: string) {
    this.model = new CreateNewShortLinkDto({
      endpointUrl: endpointUrl,
    });
  }
}
export class HomePostUrlCompletedAction implements Action {
  readonly type = homeActions.homePostUrlCompleted;
  constructor(public dto: ShortLinkDetailsDto) {}
}
export class HomePostUrlFailedAction implements Action {
  readonly type = homeActions.homePostUrlFailed;
  constructor(public errorMessage: string) {}
}
