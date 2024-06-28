/**
 * Copyright 2024 The Google Earth Engine Community Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START earthengine__apidocs__ee_filter_hastype]
var fc = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Rectangle([0, 0, 1, 1]), {'x': 0}),
  ee.Feature(ee.Geometry.Rectangle(0, 0, 3, 3), {'x': 'foo'}),
  ee.Feature(ee.Geometry.Point(0, 0))]);

// The third feature has a Point geometry.
print(fc.filter(ee.Filter.hasType({leftField: '.geo', rightValue: 'Point'})));

// The first two features have a Polygon geometry.
print(fc.filter(ee.Filter.hasType({leftField: '.geo', rightValue: 'Polygon'})));

// The first feature has property x with type Number.
print(fc.filter(ee.Filter.hasType({leftField: 'x', rightValue: 'Number'})));

// The second feature has property x with type String.
print(fc.filter(ee.Filter.hasType({leftField: 'x', rightValue: 'String'})));
// [END earthengine__apidocs__ee_filter_hastype]
