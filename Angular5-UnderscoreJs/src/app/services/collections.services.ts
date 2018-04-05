import { _ } from 'underscore';

export class CollectionsHelpers {

  constructor() { }

  public each(array, delegate): any {
    return _.each(array, delegate);
  }

}