import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, ListGroup, Alert } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBarModal = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setSearchTerm('');
    setSearchResults([]);
    setNoResults(false);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    performSearch(term);
  };

  const performSearch = (term) => {
    const results = notifications.filter(notification =>
      notification.content.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    setNoResults(results.length === 0);
  };

  return (
    <>
      <Button variant="navbar-icon" onClick={handleShow}>
        <i className="icon-search"></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className='pb-0'>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="searchBar" className='position-relative FormIconControl'>
              <i class="position-absolute top-50 start-20 translate-middle"><i className="icon-search"></i></i>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
            </Form.Group>
          </Form>
          {searchTerm && noResults ? (
            <Alert variant="warning" className="mt-3">No data found</Alert>
          ) : (
            <ListGroup className="mt-1 search-results-list">
              {searchResults.map((result, index) => (
                <ListGroup.Item key={index}>
                  <div className="d-flex w-100 justify-content-between">
                    <div className="mb-1 fw-semibold0">{result.heading}</div>
                  </div>
                  <p className="small mb-1">
                    {result.content.length > 80
                      ? `${result.content.substring(0, 80)}...`
                      : result.content}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchBarModal;

// Sample notifications data
const notifications = [
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 1',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 2',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'List group item heading 3',
    content: 'Some placeholder content in a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
