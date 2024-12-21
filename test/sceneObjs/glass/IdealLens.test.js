/*
 * Copyright 2024 The Ray Optics Simulation authors and contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import IdealLens from '../../../src/simulator/js/sceneObjs/glass/IdealLens';
import Scene from '../../../src/simulator/js/Scene';
import { testLineObj } from '../helpers/lineObjTests';
import { MockUser } from '../helpers/test-utils';

describe('IdealLens', () => {
  let scene;
  let obj;
  let user;

  beforeEach(() => {
    scene = new Scene();
    obj = new IdealLens(scene);
    user = new MockUser(obj);
  });

  testLineObj(() => ({ obj, user }));

  it('sets properties', () => {
    user.click(100, 100);
    user.click(200, 300);
    user.set("{{simulator:sceneObjs.common.focalLength}}", 50);

    expect(obj.serialize()).toEqual({
      type: "IdealLens",
      p1: { x: 100, y: 100 },
      p2: { x: 200, y: 300 },
      focalLength: 50
    });
  });
}); 