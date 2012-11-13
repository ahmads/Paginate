var assert = require('assert')

describe('Paginate', function () {
	
	var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
	
	var Paginate = require('../Paginate')
		
  describe('Constructor', function () {
		
    it('should return a `Paginate` object', function () {
      assert.ok(new Paginate(data))
      assert.ok(new Paginate(data, 3))
			assert(new Paginate(data) instanceof Paginate)
		})
		
		it('should throw if no argument is passed', function () {
			assert.throws(function () { new Paginate() }, Error)
		})
		
		it('should throw if wrong argument type is passed', function () {
			assert.throws(function () { new Paginate({}) }, Error)
		})
		
	})
		
	describe('Paginate Object', function () {
		
		var obj;
		
		beforeEach(function () {
			obj = new Paginate(data)
		})
			
		describe('#next()', function () {
			
			it('should return the next page', function () {
				assert.deepEqual(obj.next(), data.slice(0,10))
				assert.deepEqual(obj.next(), data.slice(10,20))
			})
			
		})
		
		describe('#prev()', function () {
			
			it('should return the previous page', function () {
				assert.deepEqual(obj.prev(), data.slice(0,10))
			})
			
		})
		
		describe('#page()', function () {
			
			it('should return the required page', function () {
				assert.deepEqual(obj.page(3), data.slice(20,25))
			})
			
		})
		
		describe('#hasNext()', function () {
			
			it('should return `true` if it has more pages', function () {
				obj.page(1)
				assert.equal(obj.hasNext(), true)
				obj.next()
				assert.equal(obj.hasNext(), true)
			})
			
			it('should return `false` if it has _no_ more pages', function () {
				obj.page(3)
				assert.equal(obj.hasNext(), false)
				obj.prev()
				obj.next()
				assert.equal(obj.hasNext(), false)
			})
			
		})
		
	})
	
})
