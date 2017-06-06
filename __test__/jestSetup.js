import { shallow, render, mount } from 'enzyme'
import fetchMock from 'jest-fetch-mock'

global.shallow = shallow
global.render = render
global.mount = mount
global.fetch = fetchMock
