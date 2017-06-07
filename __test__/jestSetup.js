import { shallow, render, mount } from 'enzyme'
import fetchMock from 'jest-fetch-mock'
import readJson from './helpers/readJson'

global.shallow = shallow
global.render = render
global.mount = mount
global.fetch = fetchMock
global.readJson = readJson
